from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType
from django.urls import reverse


User = get_user_model()


def get_product_url(obj, viewname):
    cl_model = obj.__class__._meta.model_name
    return reverse(viewname, kwargs={'cl_model': cl_model, 'slug': obj.slug})


def get_models_for_count(*model_names):
    return [models.Count(model_name) for model_name in model_names]


class LatestProductsManager:

    @staticmethod
    def get_products_for_main_page(*args, **kwargs):
        with_respect_to = kwargs.get('with_respect_to')
        products = []
        ct_models = ContentType.objects.filter(model__in=args)
        for ct_model in ct_models:
            model_products = ct_model.model_class()._base_manager.all().order_by('-id')[:5]
            products.extend(model_products)
        if with_respect_to:
            ct_model = ContentType.objects.filter(model=with_respect_to)
            if ct_model.exists():
                if with_respect_to in args:
                    return sorted(
                        products, key=lambda x: x.__class__._meta.model_name.startswith(with_respect_to), reverse=True
                    )
        return products


class LatestProducts:

    objects = LatestProductsManager()


class CategoryManager(models.Manager):

    CATEGORY_NAME_COUNT_NAME = {
        'Рецепты': 'Recipe__count'
    }

    def get_queryset(self):
        return super().get_queryset()


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

    def get_absolute_url(self):
        return get_product_url(self, 'Recipe.html')


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
        return "Пользователь: {} {}".format(self.user.first_name, self.user.last_name)

    class Meta:
        verbose_name = 'Имя пользователя'
        verbose_name_plural = 'Имя пользователей'