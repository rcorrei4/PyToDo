from .models import Task, Tag
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import TaskSerializer, TagSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tasks to be viewed or edited.
    """
    queryset = Task.objects.all().order_by('-id')
    serializer_class = TaskSerializer


class TagViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tags to be viewed or edited.
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer