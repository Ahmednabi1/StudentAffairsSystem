from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Student
from django.views.decorators.csrf import csrf_exempt
import json
from django.template import loader
from django.shortcuts import render, redirect
from django.template import RequestContext
from django.http import JsonResponse
from django.shortcuts import get_object_or_404

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
        return redirect('home')

    return render(request, 'AddaNewStudent.html')

@csrf_exempt
def change_status(request, student_id):
    if request.method == 'POST':
        student = Student.objects.get(ID=student_id)
        status = request.POST.get('status')
        student.status = status
        student.save()

    students = Student.objects.all()
    return render(request, 'DisplayAllStudents.html', {'students': students})

@csrf_exempt
def display_students(request):
    students = Student.objects.all()
    return render(request, 'DisplayAllStudents.html', {'students': students})

@csrf_exempt
def update(request):
    students = Student.objects.all().values()
    template = loader.get_template('Update.html')
    context = {
    'students': students
    }
    return HttpResponse(template.render(context, request))

@csrf_exempt
def search(request):
    if request.method == "POST":
        searched = request.POST['searched']
        students = Student.objects.filter(name__contains=searched)
        return render(request, 'Search.html', {'searched': searched, 'students': students})
    else:    
        return render(request, 'Search.html', {})


@csrf_exempt
def departmentAssignment(request):
    return render(request, 'DepartmentAssignment.html')

@csrf_exempt
def cover(request):
    return render(request, 'cover.html')


@csrf_exempt
def get_student_data(request, student_id):
    student = get_object_or_404(Student, ID=student_id)
    student_data = {
        'name': student.name,
        'ID': student.ID,
        'GPA': student.GPA,
        'birthDate': student.birthDate,
        'gender': student.gender,
        'level': student.level,
        'status': student.status,
        'department': student.department,
        'email': student.email,
        'mobilePhone': student.mobilePhone,
    }
    return JsonResponse(student_data)


@csrf_exempt
def update_student(request, student_id):
    if request.method == 'PUT':
        student = get_object_or_404(Student, ID=student_id)

        # Get the updated data from the request
        updated_data = json.loads(request.body)
        student.name = updated_data['name']
        student.GPA = updated_data['GPA']
        student.birthDate = updated_data['birthDate']
        student.gender = updated_data['gender']
        student.level = updated_data['level']
        student.status = updated_data['status']
        student.department = updated_data['department']
        student.email = updated_data['email']
        student.mobilePhone = updated_data['mobilePhone']
        
        # Save the updated student record
        student.save()

        # Return a success response
        return JsonResponse({'message': 'Student data updated successfully'})

    # If the request method is not PUT, return an error response
    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def delete_student(request, student_id):
    if request.method == 'DELETE':
        student = get_object_or_404(Student, ID=student_id)
        student.delete()
        return JsonResponse({'message': 'Student deleted successfully'})

    return JsonResponse({'error': 'Invalid request method'}, status=405)