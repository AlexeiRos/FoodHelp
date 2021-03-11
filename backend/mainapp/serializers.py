from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class CategorySerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'objects')