from django.shortcuts import render
from django.http import HttpResponse
from findMusicBody.models import Indexbanner
import json
# React云音乐index请求
def findMusicBody(request):
    vv = {}
    lista = Indexbanner.objects.all().values()
    data_list = list(lista)
    vv["f"] = data_list
    response1 = json.dumps(vv)
    return HttpResponse(response1,content_type="application/json")

