# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class EntitySize(Model):
    """The information about an entity size.

    :param qualified_entity_name: Gets the entity Name
    :type qualified_entity_name: str
    :param size: Gets the size of the entire entity (in Bytes)
    :type size: long
    :param row_count: Gets the row count of the entity
    :type row_count: long
    """

    _attribute_map = {
        'qualified_entity_name': {'key': 'qualifiedEntityName', 'type': 'str'},
        'size': {'key': 'size', 'type': 'long'},
        'row_count': {'key': 'rowCount', 'type': 'long'},
    }

    def __init__(self, **kwargs):
        super(EntitySize, self).__init__(**kwargs)
        self.qualified_entity_name = kwargs.get('qualified_entity_name', None)
        self.size = kwargs.get('size', None)
        self.row_count = kwargs.get('row_count', None)
