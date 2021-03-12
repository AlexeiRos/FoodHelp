from django.shortcuts import render
from django.contrib.auth.models import User
from django.views.generic import DetailView
from rest_framework import viewsets, permissions
from .models import Recipe, Category
from . import serializers


def test_view(request):
    return render(request, 'food.html', {'categories': ''})


def food(request, path=''):
    return render(request, 'food.html')


class ProductDetailView(DetailView):

    CT_MODEL_MODEL_CLASS = {
        'recipe': Recipe,
    }


class UserViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the User model
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    """
    Provides basic CRUD functions for the Blog Post model
    """
    queryset = Category.objects.all()
    serializer_class = serializers.CategorySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)