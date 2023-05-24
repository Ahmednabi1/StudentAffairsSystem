from django.urls import path
from . import views

urlpatterns = [
    path('', views.cover, name='cover'),
    path('home', views.home, name='home'),
    path('add_student/', views.add_student, name='add_student'),
    path('display_students/', views.display_students, name='display_students'),
    path('update_student/', views.update, name='update_student'),
    path('search_for_student/', views.search, name='search_for_student'),
    path('departmentAssignment/', views.departmentAssignment, name='departmentAssignment'),
    path('get_student_data/<int:student_id>/', views.get_student_data, name='get_student_data'),
    path('update_student/<str:student_id>/', views.update_student, name='update_student1'),
    path('delete_student/<str:student_id>/', views.delete_student, name='delete_student'),
]