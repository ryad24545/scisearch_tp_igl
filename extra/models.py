# extra/extra/models.py

from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    institution = models.CharField(max_length=255)
    abstract = models.TextField()
    keywords = models.CharField(max_length=255)
    references = models.TextField()
    pdf_file = models.FileField(upload_to='pdf_files/')
