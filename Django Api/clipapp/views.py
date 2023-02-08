from django.shortcuts import render
from django.http import JsonResponse
import json
from django.core.files.storage import default_storage
from django.http import HttpResponse

def save_data(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        with open('dataD.json', 'w') as json_file:
            json.dump(data, json_file)
        return JsonResponse({'message': 'Data saved successfully'})
    
def testing(request):
    data = {"data": "{\"_id\":\"kFTTIYLRDSTd\",\"content\":\"Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that, so it goes on flying anyway.\",\"author\":\"Mary Kay Ash\",\"tags\":[\"famous-quotes\"],\"authorSlug\":\"mary-kay-ash\",\"length\":121,\"dateAdded\":\"2020-04-02\",\"dateModified\":\"2021-06-17\"}"}
    return JsonResponse(data)
    
# Create your views here.
