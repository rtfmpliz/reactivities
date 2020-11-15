using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.NCs
{
    public class List
    {
        public class Query : IRequest<List<NC>> { }

        public class Handler : IRequestHandler<Query, List<NC>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<List<NC>> Handle(Query request,
            CancellationToken cancellationToken)
            {

                var ncs = await _context.NCs.ToListAsync();
                return ncs;
            }
        }
    }
}