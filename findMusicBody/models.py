from django.db import models
class Indexbanner(models.Model):
    userid = models.CharField(db_column='USERID', max_length=255)  # Field name made lowercase.
    bannerimg = models.CharField(db_column='BANNERIMG', max_length=255)  # Field name made lowercase.
    imgid = models.CharField(db_column='IMGID', max_length=255)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'indexbanner'
