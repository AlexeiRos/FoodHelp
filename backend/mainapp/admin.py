from PIL import Image

from django.forms import ModelChoiceField, ModelForm, ValidationError
from django.contrib import admin
from django.utils.safestring import mark_safe

from.models import *


class IngredientsAdmin(admin.ModelAdmin):
    pass