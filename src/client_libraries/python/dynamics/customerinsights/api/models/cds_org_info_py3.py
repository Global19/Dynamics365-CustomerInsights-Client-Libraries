# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class CdsOrgInfo(Model):
    """The information for CDS Organization in BAP.

    :param friendly_name: Gets the Cds Organization Friendly Name
    :type friendly_name: str
    :param url: Gets the Cds Organization Url
    :type url: str
    :param state: Gets the Cds Organization State
    :type state: str
    """

    _attribute_map = {
        'friendly_name': {'key': 'friendlyName', 'type': 'str'},
        'url': {'key': 'url', 'type': 'str'},
        'state': {'key': 'state', 'type': 'str'},
    }

    def __init__(self, *, friendly_name: str=None, url: str=None, state: str=None, **kwargs) -> None:
        super(CdsOrgInfo, self).__init__(**kwargs)
        self.friendly_name = friendly_name
        self.url = url
        self.state = state
