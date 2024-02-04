# extra/views.py

import fitz  # PyMuPDF
from django.shortcuts import render, redirect

from .models import Article

# Change this import statement in views.py
# from .forms import ArticleForm

# To this corrected import statement
from .forms import ArticleForm

def extract_info_from_pdf(pdf_path):
    extracted_info = {
        'title': '',
        'author': '',
        'institution': '',
        'abstract': '',
        'keywords': '',
        'references': '',
    }

    try:
        doc = fitz.open(pdf_path)
        text = ''

        # Iterate through pages and extract text
        for page_num in range(doc.page_count):
            page = doc[page_num]

            # Extract text in the correct order considering columns
            blocks = page.get_text('blocks')
            blocks.sort(key=lambda b: (b[0], -b[3]))  # Sort blocks by their top position and left position

            for block in blocks:
                text += block[4] + '\n'  # Add the text from the block

        # Example extraction logic (replace with your actual logic)
        # This is a simple example and may not work for all PDF structures
        # You should adapt this to your specific use case

        # Extract title (assuming the title is on the first line)
        extracted_info['title'] = text.split('\n')[0].strip()

        # Extract author (assuming the author is on the second line)
        extracted_info['author'] = text.split('\n')[1].strip()

        # Extract institution (assuming the institution is on the third line)
        extracted_info['institution'] = text.split('\n')[2].strip()

        # Extract abstract (assuming the abstract is between certain keywords)
        abstract_start = text.find('Abstract') + len('Abstract')
        abstract_end = text.find('Keywords')
        extracted_info['abstract'] = text[abstract_start:abstract_end].strip()

        # Extract keywords (assuming keywords are after the 'Keywords' keyword)
        keywords_start = text.find('Keywords') + len('Keywords')
        keywords_end = text.find('References')
        extracted_info['keywords'] = text[keywords_start:keywords_end].strip()

        # Extract references (assuming references start after the 'References' keyword)
        references_start = text.find('References') + len('References')
        extracted_info['references'] = text[references_start:].strip()

    except Exception as e:
        print(f"Error extracting information from PDF: {e}")

    return extracted_info

def upload_article(request):
    if request.method == 'POST':
        form = ArticleForm(request.POST, request.FILES)
        if form.is_valid():
            article = form.save(commit=False)
            pdf_path = article.pdf_file.path
            extracted_info = extract_info_from_pdf(pdf_path)

            # Update the article fields with extracted information
            article.title = extracted_info['title']
            article.author = extracted_info['author']
            article.institution = extracted_info['institution']
            article.abstract = extracted_info['abstract']
            article.keywords = extracted_info['keywords']
            article.references = extracted_info['references']
            article.save()

            return redirect('article_list')  # Redirect to a view displaying the list of articles
    else:
        form = ArticleForm()
    return render(request, 'upload_article.html', {'form': form})
