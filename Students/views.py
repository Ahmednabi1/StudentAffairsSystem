from django.http import HttpResponse
from django.template import loader

def home(request):
    template = loader.get_template('HomePage.html')
    return HttpResponse(template.render())

def add_student(request):
    template = loader.get_template('AddaNewStudent.html')
    return HttpResponse(template.render())

def display_students(request):
    template = loader.get_template('DisplayAllStudents.html')
    return HttpResponse(template.render())

def update(request):
    template = loader.get_template('Update.html')
    return HttpResponse(template.render())

def search(request):
    template = loader.get_template('Search.html')
    return HttpResponse(template.render())

def departmentAssignment(request):
    template = loader.get_template('DepartmentAssignment.html')
    return HttpResponse(template.render())

def cover(request):
    template = loader.get_template('cover.html')
    return HttpResponse(template.render())
