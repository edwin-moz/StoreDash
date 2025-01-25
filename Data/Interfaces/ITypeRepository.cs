using StoreDash.Models;

namespace StoreDash.Data.Interfaces;

public interface ITypeRepository
{
    List<Types> Get();

    Types Post(Types type);

    Types? Put(Types type);

    bool Delete(int it);
}
