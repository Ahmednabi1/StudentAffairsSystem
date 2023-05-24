from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Student
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def home(request):
    return render(request, 'HomePage.html')

@csrf_exempt
def add_student(request):
    if request.method == 'POST':
        name = request.POST.get('fname9')
        ID = request.POST.get('fname2')
        GPA = request.POST.get('fname3')
        birth_date = request.POST.get('dob')
        gender = request.POST.get('gender')
        level = request.POST.get('student-level')
        status = request.POST.get('c1') == 'active'
        department = request.POST.get('department')
        email = request.POST.get('fname8')
        mobile_phone = request.POST.get('phone number')

        student = Student(
            name=name,
            ID=ID,
            GPA=GPA,
            birthDate=birth_date,
            gender=gender,
            level=level,
            status=status,
            department=department,
            email=email,
            mobilePhone=mobile_phone
        )
        student.save()

    return render(request, 'AddaNewStudent.html')

@csrf_exempt
def display_students(request):
    return render(request, 'DisplayAllStudents.html')

@csrf_exempt
def update(request):
    return render(request, 'Update.html')

@csrf_exempt
def search(request):
    return render(request, 'Search.html')

@csrf_exempt
def departmentAssignment(request):
    return render(request, 'DepartmentAssignment.html')

@csrf_exempt
def cover(request):
    return render(request, 'cover.html')\
    
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

        return redirect('home')  # Replace 'success' with the URL or name of your success page

    return render(request, 'AddaNewStudent.html') 