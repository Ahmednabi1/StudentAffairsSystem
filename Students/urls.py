from django.urls import path
from . import views

urlpatterns = [
    path('', views.cover, name='cover'),
    path('home', views.home, name='home'),
    path('add_student/', views.create_student, name='add_student'),
    path('display_students/', views.display_students, name='display_students'),
    path('update_student/', views.update, name='update_student'),
    path('search_for_student/', views.search, name='search_for_student'),
    path('departmentAssignment/', views.departmentAssignment, name='departmentAssignment'),
]