
from django.db import models

class Auteur(models.Model):
    nom = models.CharField(max_length=100)
    # Ajoutez d'autres champs si nécessaire
    class Meta:
        app_label = 'SciSearch'

    def __str__(self):
        return self.nom

class Institution(models.Model):
    nom = models.CharField(max_length=100)
    # Ajoutez d'autres champs si nécessaire

    def __str__(self):
        return self.nom

class MotCle(models.Model):
    mot = models.CharField(max_length=50)
    # Ajoutez d'autres champs si nécessaire

    def __str__(self):
        return self.mot

class Article(models.Model):
    titre = models.CharField(max_length=255)
    resume = models.TextField()
    auteurs = models.ManyToManyField(Auteur)
    institutions = models.ManyToManyField(Institution)
    mots_cles = models.ManyToManyField(MotCle)
    texte_integral = models.TextField()
    url_pdf = models.URLField()
    references_bibliographiques = models.TextField()

    def __str__(self):
        return self.titre


