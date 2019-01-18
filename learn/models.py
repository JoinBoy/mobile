from django.db import models
class User(models.Model):
    userid = models.BigAutoField(db_column='USERID', primary_key=True)  # Field name made lowercase.
    username = models.CharField(db_column='USERNAME', max_length=255)  # Field name made lowercase.
    createtime = models.CharField(db_column='CREATETIME', max_length=255)  # Field name made lowercase.
    mail = models.CharField(db_column='MAIL', max_length=255)  # Field name made lowercase.
    password = models.CharField(db_column='PASSWORD', max_length=255)  # Field name made lowercase.
    token = models.CharField(db_column='TOKEN', max_length=255, blank=True, null=True)  # Field name made lowercase.
    tokencreattime = models.CharField(db_column='TOKENCREATTIME', max_length=255, blank=True, null=True)  # Field name made lowercase.
    ip = models.CharField(db_column='IP', max_length=255, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'user'
