// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Dynamics.CustomerInsights.Api.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class IEdmType
    {
        /// <summary>
        /// Initializes a new instance of the IEdmType class.
        /// </summary>
        public IEdmType()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the IEdmType class.
        /// </summary>
        /// <param name="typeKind">Possible values include: 'none',
        /// 'primitive', 'entity', 'complex', 'collection', 'entityReference',
        /// 'enum', 'typeDefinition', 'untyped', 'path'</param>
        public IEdmType(string typeKind = default(string))
        {
            TypeKind = typeKind;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets possible values include: 'none', 'primitive',
        /// 'entity', 'complex', 'collection', 'entityReference', 'enum',
        /// 'typeDefinition', 'untyped', 'path'
        /// </summary>
        [JsonProperty(PropertyName = "typeKind")]
        public string TypeKind { get; set; }

    }
}
