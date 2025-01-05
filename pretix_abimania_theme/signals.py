from django.dispatch import receiver
from django.template.loader import get_template
from pretix.presale.signals import front_page_top, global_html_head
from pretix.base.models import Event

@receiver(front_page_top, dispatch_uid="abimania_front_page_top")
def front_page_top(sender: Event, request=None, **kwargs):
    template = get_template("pretix_abimania_theme/front_page_top.html")
    return template.render({"event": sender})


@receiver(global_html_head, dispatch_uid="abimania_global_html_head")
def global_html_head(sender: Event, request=None, **kwargs):
    template = get_template("pretix_abimania_theme/global_html_head.html")
    return template.render({"event": sender})

