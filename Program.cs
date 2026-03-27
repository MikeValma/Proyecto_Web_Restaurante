using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Restaurante.Data; // Importa nuestra nueva carpeta Data

var builder = WebApplication.CreateBuilder(args);

// ---> AÑADIR ESTO: Conecta el DbContext con la cadena de tu appsettings.json <---
builder.Services.AddDbContext<RestauranteContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Servir todos los archivos estáticos desde la raíz del proyecto
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(builder.Environment.ContentRootPath),
    RequestPath = ""
});

app.MapGet("/", () => Results.Redirect("/Views/Home/Index.html"));

app.Run();
