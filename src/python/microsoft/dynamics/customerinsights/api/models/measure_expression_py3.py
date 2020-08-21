# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class MeasureExpression(Model):
    """Base class to represent a measure expression.

    :param kind: Possible values include: 'constant', 'property',
     'memberAccess', 'functionCall', 'and', 'or', 'equals', 'notEquals',
     'greaterThan', 'greaterThanOrEqualTo', 'lessThan', 'lessThanOrEqualTo',
     'contains', 'startsWith', 'endsWith', 'isNull', 'isNotNull', 'negate',
     'add', 'subtract', 'multiply', 'divide', 'modulo', 'exponent', 'today',
     'now'
    :type kind: str or ~microsoft.dynamics.customerinsights.api.models.enum
    """

    _attribute_map = {
        'kind': {'key': 'kind', 'type': 'str'},
    }

    def __init__(self, *, kind=None, **kwargs) -> None:
        super(MeasureExpression, self).__init__(**kwargs)
        self.kind = kind