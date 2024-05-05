namespace Acovepo.Models
{
    public class ClientePago : Cliente
    {
        public string MetodoDePago { get; set; }
        public DateTime FechaExpiracion { get; set; }

    }
}
