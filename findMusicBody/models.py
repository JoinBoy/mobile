from django.db import models
# 轮播图表
class Indexbanner(models.Model):
    userid = models.CharField(db_column='USERID', max_length=255)  # Field name made lowercase.
    bannerimg = models.CharField(db_column='BANNERIMG', max_length=255)  # Field name made lowercase.
    imgid = models.CharField(db_column='IMGID', max_length=255)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'indexbanner'

# 音乐表
class Music(models.Model):
    songerid = models.AutoField(db_column='songerId', primary_key=True)  # Field name made lowercase.
    musicid = models.CharField(db_column='musicId', max_length=255)  # Field name made lowercase.
    songername = models.CharField(db_column='songerName', max_length=255)  # Field name made lowercase.
    musicname = models.CharField(db_column='musicName', max_length=255)  # Field name made lowercase.
    musicurl = models.CharField(db_column='musicUrl', max_length=255)  # Field name made lowercase.
    createtime = models.CharField(db_column='createTime', max_length=255)  # Field name made lowercase.
    updatetime = models.CharField(db_column='updateTime', max_length=255)  # Field name made lowercase.
    playnum = models.BigIntegerField(db_column='playNum', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'music'