from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from voting.models import RankRequest, RankSubmission, Vote


@admin.register(Vote)
class VoteAdmin(admin.ModelAdmin):
    list_display = ("submission", "user", "value")
    list_filter = ("submission", "user", "value")
    search_fields = ("submission", "user")


@admin.register(RankSubmission)
class RankSubmission(admin.ModelAdmin):
    list_display = (
        "absolute_rank",
        "absolute_score",
        "title",
        "topic",
        "topic_rank",
        "level",
        "language",
        "speaker",
        "gender",
    )
    ordering = ("absolute_rank",)

    def title(self, obj):  # pragma: no cover
        return obj.submission.title

    def topic(self, obj):  # pragma: no cover
        return obj.submission.topic.name

    def level(self, obj):  # pragma: no cover
        return obj.submission.audience_level.name

    def language(self, obj):  # pragma: no cover
        emoji = {"it": "🇮🇹", "en": "🇬🇧"}
        langs = [emoji[lang.code] for lang in obj.submission.languages.all()]
        return " ".join(langs)

    def speaker(self, obj):  # pragma: no cover
        return (
            obj.submission.speaker.full_name
            or obj.submission.speaker.name
            or obj.submission.speaker.email
        )

    def gender(self, obj):  # pragma: no cover
        emoji = {
            "": "",
            "male": "👨🏻‍💻",
            "female": "👩🏼‍💻",
            "other": "🧑🏻‍🎤",
            "not_say": "⛔️",
        }
        return emoji[obj.submission.speaker.gender]


@admin.register(RankRequest)
class RankRequestAdmin(admin.ModelAdmin):
    list_display = ("conference", "created", "view_rank")

    def view_rank(self, obj):  # pragma: no cover
        return format_html(
            '<a class="button" href="{}">Open</a>&nbsp;',
            reverse("admin:voting_ranksubmission_changelist"),
        )

    view_rank.short_description = "View"
    view_rank.allow_tags = True
