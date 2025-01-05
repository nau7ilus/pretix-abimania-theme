from django.dispatch import receiver
from django.template.loader import get_template
from pretix.presale.signals import front_page_top
from pretix.base.models import Event

@receiver(front_page_top, dispatch_uid="abimania_front_page_top")
def render_seating_plan(sender: Event, request=None, **kwargs):
    template = get_template("pretix_abimania_theme/front_page_top.html")
    return template.render({"event": sender})
