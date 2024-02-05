# forms.py
from django import forms

class UploadArticleForm(forms.Form):
    fichier_pdf = forms.FileField(label='Fichier PDF', required=False)
    url = forms.URLField(label='URL de l\'article PDF', required=False)

