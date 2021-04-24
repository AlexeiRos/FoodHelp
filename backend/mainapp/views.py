from django.shortcuts import render
from django.views.generic import DetailView
from .models import Recipe


def food(request):
    return render(request, 'food.html')


class ProductDetailView(DetailView):

    CT_MODEL_MODEL_CLASS = {
        'recipe': Recipe,
    }
