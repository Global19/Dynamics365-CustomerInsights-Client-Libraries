// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Dynamics.CustomerInsights.Api.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class IAttributeMetadata
    {
        /// <summary>
        /// Initializes a new instance of the IAttributeMetadata class.
        /// </summary>
        public IAttributeMetadata()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the IAttributeMetadata class.
        /// </summary>
        /// <param name="dataType">Gets data type for property.</param>
        /// <param name="semanticType">Gets semantic type for property.
        /// Possible values include: 'CalendarDate', 'CalendarDayOfMonth',
        /// 'CalendarDayOfWeek', 'CalendarDayOfYear', 'CalendarHalfYear',
        /// 'CalendarMonthOfYear', 'CalendarMonth', 'CalendarWeek',
        /// 'CalendarYear', 'CalendarFiscalDate', 'CalendarFiscalDayOfMonth',
        /// 'CalendarFiscalDayOfWeek', 'CalendarFiscalDayOfYear',
        /// 'CalendarFiscalHalfYear', 'CalendarFiscalMonthOfYear',
        /// 'CalendarFiscalMonth', 'CalendarFiscalQuarter',
        /// 'CalendarFiscalWeekOfMonth', 'CalendarFiscalWeekOfYear',
        /// 'CalendarFiscalWeek', 'CalendarFiscalYear', 'Account', 'Channel',
        /// 'Contact', 'Customer', 'Language', 'Organization',
        /// 'OrganizationUnit', 'Person', 'Product', 'ProductGroup',
        /// 'LocationAddress', 'LocationAddressStreet', 'LocationCity',
        /// 'LocationContinent', 'LocationCountry', 'LocationCounty',
        /// 'LocationLatitude', 'LocationLongitude', 'LocationPoint',
        /// 'LocationPostalCode', 'LocationProvince', 'LocationRegion',
        /// 'LocationState', 'LocationTimezone', 'MeasurementDateCreation',
        /// 'MeasurementDateModify', 'MeasurementStatus', 'MeasurementVersion',
        /// 'BarCode', 'Brand', 'IdentityGovernmentID', 'PersonFirstName',
        /// 'PersonFullName', 'PersonLastName', 'PersonMiddleName',
        /// 'IdentityServiceEmail', 'IdentityServiceFacebook',
        /// 'IdentityServicePhone', 'IdentityServiceTwitter', 'Image', 'Place',
        /// 'ReferenceDescription', 'ReferenceImageURL', 'ReferencePhonetic',
        /// 'ReferenceURL'</param>
        public IAttributeMetadata(string name = default(string), string friendlyName = default(string), string baseName = default(string), string dataType = default(string), string semanticType = default(string), IAttributeSearchProperties searchProperties = default(IAttributeSearchProperties))
        {
            Name = name;
            FriendlyName = friendlyName;
            BaseName = baseName;
            DataType = dataType;
            SemanticType = semanticType;
            SearchProperties = searchProperties;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "name")]
        public string Name { get; private set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "friendlyName")]
        public string FriendlyName { get; private set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "baseName")]
        public string BaseName { get; private set; }

        /// <summary>
        /// Gets data type for property.
        /// </summary>
        [JsonProperty(PropertyName = "dataType")]
        public string DataType { get; set; }

        /// <summary>
        /// Gets semantic type for property. Possible values include:
        /// 'CalendarDate', 'CalendarDayOfMonth', 'CalendarDayOfWeek',
        /// 'CalendarDayOfYear', 'CalendarHalfYear', 'CalendarMonthOfYear',
        /// 'CalendarMonth', 'CalendarWeek', 'CalendarYear',
        /// 'CalendarFiscalDate', 'CalendarFiscalDayOfMonth',
        /// 'CalendarFiscalDayOfWeek', 'CalendarFiscalDayOfYear',
        /// 'CalendarFiscalHalfYear', 'CalendarFiscalMonthOfYear',
        /// 'CalendarFiscalMonth', 'CalendarFiscalQuarter',
        /// 'CalendarFiscalWeekOfMonth', 'CalendarFiscalWeekOfYear',
        /// 'CalendarFiscalWeek', 'CalendarFiscalYear', 'Account', 'Channel',
        /// 'Contact', 'Customer', 'Language', 'Organization',
        /// 'OrganizationUnit', 'Person', 'Product', 'ProductGroup',
        /// 'LocationAddress', 'LocationAddressStreet', 'LocationCity',
        /// 'LocationContinent', 'LocationCountry', 'LocationCounty',
        /// 'LocationLatitude', 'LocationLongitude', 'LocationPoint',
        /// 'LocationPostalCode', 'LocationProvince', 'LocationRegion',
        /// 'LocationState', 'LocationTimezone', 'MeasurementDateCreation',
        /// 'MeasurementDateModify', 'MeasurementStatus', 'MeasurementVersion',
        /// 'BarCode', 'Brand', 'IdentityGovernmentID', 'PersonFirstName',
        /// 'PersonFullName', 'PersonLastName', 'PersonMiddleName',
        /// 'IdentityServiceEmail', 'IdentityServiceFacebook',
        /// 'IdentityServicePhone', 'IdentityServiceTwitter', 'Image', 'Place',
        /// 'ReferenceDescription', 'ReferenceImageURL', 'ReferencePhonetic',
        /// 'ReferenceURL'
        /// </summary>
        [JsonProperty(PropertyName = "semanticType")]
        public string SemanticType { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "searchProperties")]
        public IAttributeSearchProperties SearchProperties { get; set; }

    }
}
