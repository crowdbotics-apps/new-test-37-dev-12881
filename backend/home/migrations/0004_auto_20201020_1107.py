# Generated by Django 2.2.16 on 2020-10-20 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_test'),
    ]

    operations = [
        migrations.AddField(
            model_name='test',
            name='r6',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='test',
            name='r7',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
