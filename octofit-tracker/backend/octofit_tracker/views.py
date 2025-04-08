from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer
from .models import User, Team, Activity, Leaderboard, Workout
from django.http import JsonResponse

def api_root(request):
    base_url = 'https://literate-orbit-4gwjxpqqj9v37x74-8000.app.github.dev/'
    return JsonResponse({
        "users": base_url + 'api/users/',
        "teams": base_url + 'api/teams/',
        "activities": base_url + 'api/activities/',
        "leaderboard": base_url + 'api/leaderboard/',
        "workouts": base_url + 'api/workouts/'
    })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer