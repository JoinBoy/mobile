from django.http import HttpResponse

from learn.models import User
def testdb(request):
    response = ""
    response1 = ""
    list = User.objects.all()
    for var in list:
        response1 += var.username + " "
    response = response1
    response = HttpResponse("<p>" + response + "</p>")
    return response