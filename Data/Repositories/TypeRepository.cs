using StoreDash.Data.Interfaces;
using StoreDash.Models;

namespace StoreDash.Data.Repositories;

public class TypeRepository : ITypeRepository
{
    private readonly StoreDashDbContext context;

    public TypeRepository(StoreDashDbContext context)
    {
        this.context = context;
    }

    public List<Types> Get()
    {
        List<Types> types = context.Types.ToList();

        return types;
    }

    public Types Post(Types type)
    {
        context.Add(type);
        context.SaveChanges();

        return type;
    }

    public Types? Put(Types type)
    {
        Types? typeToEdit = context.Types.SingleOrDefault((t) => t.Id == type.Id);

        if (typeToEdit == null)
        {
            return null;
        }

        typeToEdit.Name = type.Name;

        context.SaveChanges();

        return typeToEdit;
    }

    public bool Delete(int id)
    {
        try
        {
            Types typeToDelete = context.Types.Single((t) => t.Id == id);

            context.Types.Remove(typeToDelete);
            context.SaveChanges();

            return true;
        }
        catch
        {
            return false;
        }
    }
}
