from django.http import HttpResponse
from django.template import loader
from .models import Student
from django.shortcuts import render, redirect
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def home(request):
    template = loader.get_template('HomePage.html')
    request_context = RequestContext(request)
    return HttpResponse(template.render())
@csrf_exempt
def add_student(request):
    template = loader.get_template('AddaNewStudent.html')
    request_context = RequestContext(request)
    return HttpResponse(template.render())
@csrf_exempt
def display_students(request):
    template = loader.get_template('DisplayAllStudents.html')
    request_context = RequestContext(request)
    return HttpResponse(template.render())
@csrf_exempt
def update(request):
    template = loader.get_template('Update.html')
    request_context = RequestContext(request)
    return HttpResponse(template.render())
@csrf_exempt
def search(request):
    template = loader.get_template('Search.html')
    request_context = RequestContext(request)
    return HttpResponse(template.render())
@csrf_exempt
def departmentAssignment(request):
    template = loader.get_template('DepartmentAssignment.html')
    request_context = RequestContext(request)
    return HttpResponse(template.render())
@csrf_exempt
def cover(request):
    template = loader.get_template('cover.html')
    request_context = RequestContext(request)
    return HttpResponse(template.render())


@csrf_exempt
def create_student(request):
    if request.method == 'POST':
        name = request.POST.get('fname9')
        ID = request.POST.get('fname2')
        GPA = request.POST.get('fname3')
        birth_date = request.POST.get('dob')
        gender = request.POST.get('gender')
        level = request.POST.get('student-level')
        status = request.POST.get('c1') == 'on'
        department = request.POST.get('department')
        email = request.POST.get('fname8')
        mobile_phone = request.POST.get('phone number')

        student = Student(name=name, ID=ID, GPA=GPA, birthDate=birth_date, gender=gender, level=level,
                          status=status, department=department, email=email, mobilePhone=mobile_phone)
        student.save()

        # Redirect to a success page or perform any additional actions

        return redirect('success')  # Replace 'success' with the URL or name of your success page

    return render(request, 'AddaNewStudent.html',context_instance=RequestContext(request))