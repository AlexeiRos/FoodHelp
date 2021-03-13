from rest_framework import routers
from .api import CategoryViewSet, ProductViewSet


router = routers.DefaultRouter()
router.register('Category', CategoryViewSet, 'mainapp')
router.register('Product', ProductViewSet, 'mainapp')


urlpatterns = router.urls
