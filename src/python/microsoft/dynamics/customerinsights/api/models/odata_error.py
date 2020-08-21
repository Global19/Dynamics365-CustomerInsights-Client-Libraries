# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class ODataError(Model):
    """ODataError.

    :param error_code:
    :type error_code: str
    :param message:
    :type message: str
    :param target:
    :type target: str
    :param details:
    :type details:
     list[~microsoft.dynamics.customerinsights.api.models.ODataErrorDetail]
    :param inner_error:
    :type inner_error:
     ~microsoft.dynamics.customerinsights.api.models.ODataInnerError
    :param instance_annotations:
    :type instance_annotations:
     list[~microsoft.dynamics.customerinsights.api.models.ODataInstanceAnnotation]
    :param type_annotation:
    :type type_annotation:
     ~microsoft.dynamics.customerinsights.api.models.ODataTypeAnnotation
    """

    _attribute_map = {
        'error_code': {'key': 'errorCode', 'type': 'str'},
        'message': {'key': 'message', 'type': 'str'},
        'target': {'key': 'target', 'type': 'str'},
        'details': {'key': 'details', 'type': '[ODataErrorDetail]'},
        'inner_error': {'key': 'innerError', 'type': 'ODataInnerError'},
        'instance_annotations': {'key': 'instanceAnnotations', 'type': '[ODataInstanceAnnotation]'},
        'type_annotation': {'key': 'typeAnnotation', 'type': 'ODataTypeAnnotation'},
    }

    def __init__(self, **kwargs):
        super(ODataError, self).__init__(**kwargs)
        self.error_code = kwargs.get('error_code', None)
        self.message = kwargs.get('message', None)
        self.target = kwargs.get('target', None)
        self.details = kwargs.get('details', None)
        self.inner_error = kwargs.get('inner_error', None)
        self.instance_annotations = kwargs.get('instance_annotations', None)
        self.type_annotation = kwargs.get('type_annotation', None)