from django.http import HttpResponse
# Create your views here.

def index(request):
    line1 = '<h1 style="text-align: center""> 我的第一个网页！！</h1>'
    return HttpResponse(line1)
