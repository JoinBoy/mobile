from django.shortcuts import render
from django.http import HttpResponse
from findMusicBody.models import Indexbanner,Music
from django.views.decorators.csrf import csrf_exempt
import json
from django.core.files.base import ContentFile
from django.core.files.storage import get_storage_class



# React云音乐index请求
@csrf_exempt
def findMusicBody(request):
    files =request.FILES.getlist('file')
    print(files)
    for a in files:
        print(a.size,a.name)
    vv = {}
    lista = Indexbanner.objects.all().values()
    listMusic = Music.objects.all().values()[0:6]
    data_listMusic = list(listMusic)
    data_list = list(lista)
    vv["f"] = data_list
    vv["g"] = data_listMusic
    response1 = json.dumps(vv)
    fa = open("Absolute/path/to/save/file/asa.txt")
    print(fa.name)
    storageSystem = get_storage_class()('Absolute/path/to/save/file')
    print(storageSystem)
    the_file = ContentFile(content="Hello 郑辉是个啥子 world!")

    print(the_file)
    storageSystem.save(name = "asa.json",content=the_file)
    print(storageSystem)
    return HttpResponse(response1,content_type="application/json")

