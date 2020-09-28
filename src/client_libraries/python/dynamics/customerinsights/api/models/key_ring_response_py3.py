# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class KeyRingResponse(Model):
    """KeyRingResponse.

    :param instance_id:
    :type instance_id: str
    :param customer_id:
    :type customer_id: str
    :param key_ring:
    :type key_ring: object
    """

    _attribute_map = {
        'instance_id': {'key': 'instanceId', 'type': 'str'},
        'customer_id': {'key': 'customerId', 'type': 'str'},
        'key_ring': {'key': 'keyRing', 'type': 'object'},
    }

    def __init__(self, *, instance_id: str=None, customer_id: str=None, key_ring=None, **kwargs) -> None:
        super(KeyRingResponse, self).__init__(**kwargs)
        self.instance_id = instance_id
        self.customer_id = customer_id
        self.key_ring = key_ring