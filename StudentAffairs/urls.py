from django.contrib import admin
from django.urls import include, path
#from django.conf.urls.static import static

urlpatterns = [
    path('', include('Students.urls')),
    path('admin/', admin.site.urls),
]

# Serve static files during development
#if settings.DEBUG:
#    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
