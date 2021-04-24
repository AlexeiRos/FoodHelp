from django.urls import path, include
from rest_framework import routers
from .api import *


router = routers.DefaultRouter()
router.register(r'Category', CategoryViewSet)
router.register(r'Product', ProductViewSet)
router.register(r'Customer', CustomerViewSet)
router.register(r'Recipe', RecipeViewSet)


urlpatterns = [
    path('', include(router.urls)),

]
