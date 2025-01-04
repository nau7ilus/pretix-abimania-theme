from django.utils.translation import gettext_lazy

from . import __version__

try:
    from pretix.base.plugins import PluginConfig
except ImportError:
    raise RuntimeError("Please use pretix 2.7 or above to run this plugin!")


class PluginApp(PluginConfig):
    default = True
    name = "pretix_abimania_theme"
    verbose_name = "Abimania Style"

    class PretixPluginMeta:
        name = gettext_lazy("Abimania Style")
        author = "Filip Zelinskyi"
        description = gettext_lazy("Style for Abimania")
        visible = True
        version = __version__
        category = "FEATURE"
        compatibility = "pretix>=2.7.0"

    def ready(self):
        from . import signals  # NOQA
