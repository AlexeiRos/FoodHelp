from django.urls import path, include
from rest_framework import routers
from .api import *

from .views import (
    LoginView,
    RegistrationView
)

router = routers.DefaultRouter()
router.register(r'Category', CategoryViewSet)
router.register(r'Product', ProductViewSet)
router.register(r'Customer', CustomerViewSet)
router.register(r'Recipe', RecipeViewSet)


urlpatterns = [
    path('api-test', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
    path('registration/', RegistrationView.as_view(), name='registration')
]
