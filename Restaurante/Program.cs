using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Servir todos los archivos estáticos desde la raíz del proyecto
// (Views/, Controllers/, Models/, wwwroot/, etc.)
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(builder.Environment.ContentRootPath),
    RequestPath = ""
});

// Redirigir la raíz "/" a la página de inicio
app.MapGet("/", () => Results.Redirect("/Views/Home/Index.html"));

app.Run();
