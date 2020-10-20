from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(
        max_length=150,
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Test(models.Model):
    "Generated Model"
    r1 = models.BigIntegerField()
    r2 = models.BooleanField()
    r3 = models.DateField()
    r4 = models.DateTimeField()
    r5 = models.TextField()
    r6 = models.TimeField(
        null=True,
        blank=True,
    )
    r7 = models.TimeField(
        null=True,
        blank=True,
    )
