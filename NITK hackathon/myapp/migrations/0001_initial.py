# Generated by Django 3.2.6 on 2023-11-30 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company_name', models.CharField(max_length=225)),
                ('GSTIN', models.CharField(max_length=225)),
                ('Created_date', models.DateField()),
                ('company_code', models.CharField(max_length=255)),
            ],
        ),
    ]