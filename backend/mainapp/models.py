import sys
from PIL import Image

from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.urls import reverse

from io import BytesIO

User = get_user_model()


class CategoryManager(models.Manager):

    CATEGORY_NAME_COUNT_NAME = {
        'Ингредиенты': 'ingredients__count'
    }


class Category(models.Model):

    name = models.CharField(max_length=255, verbose_name='Имя категории')
    slug = models.SlugField(max_length=50, blank=True, unique=True)
    objects = CategoryManager()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Имя категории'
        verbose_name_plural = 'Имя категорий'


class Product(models.Model):

    category = models.ForeignKey(Category, verbose_name='Категория', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Наименование')
    slug = models.SlugField(unique=True)
    image = models.ImageField(verbose_name='Изображение')
    description = models.TextField(verbose_name='Описание', null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Имя продукта'
        verbose_name_plural = 'Имя продуктов'


class Recipe(Product):

    recipe_description = models.TextField(verbose_name='Описание рецепта', null=True)
    calories = models.CharField(max_length=255, verbose_name='Калорийность')

    def __str__(self):
        return "{} : {}".format(self.category.name, self.title)


class Customer(models.Model):

    user = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, verbose_name='Номер телефона')
    address = models.CharField(max_length=255, verbose_name='Адрес')

    def __str__(self):
        return "Покупатель: {} {}".format(self.user.first_name, self.user.last_name)