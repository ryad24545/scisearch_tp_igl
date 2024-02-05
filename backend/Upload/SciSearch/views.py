# TPIGL/SciSearch/views.py
from django.shortcuts import render, redirect
from .forms import UploadArticleForm
from .models import Article
import re, io
import requests
from PyPDF2 import PdfFileReader


def welcome(request): # pour la page de bienvenue 
    return render(request, 'welcome.html')

#cette fonction gere le processus d'extraction du texte from pdf
def extract_info_from_pdf(pdf_text):
    # Extraire le titre (en gras, en haut)
    title_pattern = re.compile(r'(.+)')
    title_match = title_pattern.search(pdf_text)
    title = title_match.group(1) if title_match else ''

    # Extraire les auteurs et institutions
    authors_pattern = re.compile(r'Auteur\(s\):\s*(.+)')
    authors_match = authors_pattern.search(pdf_text)
    authors = [author.strip() for author in authors_match.group(1).split() if author.strip()] if authors_match else []

    # Extraire le résumé
    summary_pattern = re.compile(r'Resume:\s*(.+)')
    summary_match = summary_pattern.search(pdf_text)
    summary = summary_match.group(1) if summary_match else ''

    # Extraire les mots-clés
    keywords_pattern = re.compile(r'Mot cles:\s*(.+)')
    keywords_match = keywords_pattern.search(pdf_text)
    keywords = keywords_match.group(1) if keywords_match else ''

    # Extraire le texte intégral
    full_text_pattern = re.compile(r'Texte:\s*(.+)')
    full_text_match = full_text_pattern.search(pdf_text)
    full_text = full_text_match.group(1) if full_text_match else ''

    # Extraire les références bibliographiques
    references_pattern = re.compile(r'References:\s*(.+)')
    references_match = references_pattern.search(pdf_text)
    references = references_match.group(1) if references_match else ''

    return {
        'title': title.strip(),
        'authors': [author.strip() for author in authors],
        'summary': summary.strip(),
        'keywords': keywords.strip(),
        'full_text': full_text.strip(),
        'references': references.strip()
    }


#Cette fonction gère le processus de téléchargement d'un fichier PDF depuis une URL,
#l'extraction du texte de ce fichier PDF, l'extraction d'informations pertinentes à partir de ce texte, 
#et l'enregistrement de ces informations dans la base de données Django.

def upload_articles(request):
    # Si la requête est de type POST, cela signifie que le formulaire a été soumis
    if request.method == 'POST':
        # Création d'une instance du formulaire avec les données de la requête POST
        form = UploadArticleForm(request.POST)
        
        # Vérification de la validité du formulaire
        if form.is_valid():
            # Récupération de l'URL du formulaire
            url = form.cleaned_data['url']

            # Téléchargement du fichier PDF depuis l'URL
            response = requests.get(url)
            pdf_content = response.content

            # Création et écriture du fichier PDF temporaire
            with open("temporary_pdf.pdf", "wb") as pdf_file:
                pdf_file.write(pdf_content)

            # Extraction du texte du fichier PDF
            pdf_text = ""
            with open("temporary_pdf.pdf", "rb") as pdf_file:
                pdf_reader = PdfFileReader(pdf_file)
                for page_number in range(pdf_reader.numPages):
                    pdf_page = pdf_reader.getPage(page_number)
                    pdf_text += pdf_page.extractText()

            # Extraction des informations du PDF
            extracted_info = extract_info_from_pdf(pdf_text)

            # Enregistrement des informations dans la base de données Django
            Article.objects.create(
                titre=extracted_info['title'],
                auteurs=extracted_info['authors'],
                resume=extracted_info['summary'],
                mots_cles=extracted_info['keywords'],
                texte_integral=extracted_info['full_text'],
                references_bibliographiques=extracted_info['references'],
                # Ajoutez d'autres champs du modèle si nécessaire
            )

            # Redirection vers une page de succès ou une autre vue
            return redirect('success_page')
    
    # Si la requête n'est pas de type POST, cela signifie qu'il s'agit d'une requête GET
    else:
        # Création d'une instance vide du formulaire
        form = UploadArticleForm()

    # Rendu du formulaire et des données dans le contexte
    return render(request, 'upload_articles.html', {'form': form})



def confirmation_page(request):
    # Obtenez les données extraites du contexte ou de la base de données
    # Remplacez cette partie par votre logique d'extraction ou de récupération des données
    extracted_info = {
        'title': 'Titre de l\'article',
        'authors': ['Auteur1', 'Auteur2'],
        'summary': 'Résumé de l\'article.',
        'keywords': 'Mot clé 1, Mot clé 2',
        'full_text': 'Texte intégral de l\'article.',
        'references': 'Références bibliographiques.',
        # Ajoutez d'autres champs du modèle si nécessaire
    }

    return render(request, 'confirmation_page.html', {'extracted_info': extracted_info})