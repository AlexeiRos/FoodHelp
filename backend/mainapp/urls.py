from rest_framework import routers
from .api import *


router = routers.DefaultRouter()
router.register(r'Category', CategoryViewSet)
router.register(r'Product', ProductViewSet)
router.register(r'Customer', CustomerViewSet)


urlpatterns = router.urls
