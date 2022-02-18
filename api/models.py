from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
	name = models.CharField(max_length=128)
	notes = models.CharField(max_length=512)
	tags = models.ManyToManyField("Tag", blank=True)
	date = models.DateField()
	user = models.ForeignKey(User, on_delete=models.CASCADE)

	def __str__(self):
		return self.name

class Tag(models.Model):
	name = models.CharField(max_length=64)

	def __str__(self):
		return self.name