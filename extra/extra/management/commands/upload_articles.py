# extra/management/commands/upload_articles.py

import os
from django.core.management.base import BaseCommand
from extra.models import Article
from extra.views import extract_info_from_pdf  # Import the function from views

class Command(BaseCommand):
    help = 'Upload sample articles from a folder'

    def handle(self, *args, **options):
        sample_articles_folder = '/home/oussama/Desktop/extra/Echantillons'  
        pdf_files = [f for f in os.listdir(sample_articles_folder) if f.endswith('.pdf')]

        for pdf_file in pdf_files:
            pdf_path = os.path.join(sample_articles_folder, pdf_file)
            extracted_info = extract_info_from_pdf(pdf_path)

            article = Article.objects.create(
                title=extracted_info['title'],
                author=extracted_info['author'],
                institution=extracted_info['institution'],
                abstract=extracted_info['abstract'],
                keywords=extracted_info['keywords'],
                references=extracted_info['references'],
                pdf_file=pdf_path,
            )

            self.stdout.write(self.style.SUCCESS(f'Successfully uploaded article: {article.title}'))
