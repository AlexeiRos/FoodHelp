from django.shortcuts import render
from django.views.generic import DetailView
from .models import Recipe


def test_view(request):
    return render(request, 'Recipe.html', {'categories': ''})


def food(request, path=''):
    return render(request, 'food.html')


class ProductDetailView(DetailView):

    CT_MODEL_MODEL_CLASS = {
        'recipe': Recipe,
    }
